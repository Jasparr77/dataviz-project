from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect, JsonResponse
from django.views import generic
from django.urls import reverse
from django.apps import apps

# from .forms import IngestFileForm
# from .ingest import handle_file
from .models import Dataviz

import json

# Create your views here.

class VizListView(generic.ListView):
    template_name = 'vizzes/VizList.html'
    context_object_name = 'viz_list'
    def get_queryset(self):
        return Dataviz.objects.order_by('-date_added')[0:]
    
class VizView(generic.DetailView):
    model = Dataviz
    context_object_name = 'selected_dataviz'
    template_name = 'vizzes/detail.html'

def pickModel(viz_id_arg):
    modelname = str(Dataviz.objects.get(id=viz_id_arg))
    return apps.get_model('vizzes', modelname, require_ready=True)

def VizData(request, **args):
    viz_id_arg = args['pk']
    selected_model = pickModel(viz_id_arg)
    data = selected_model.objects.values()
    data = json.loads(json.dumps(data[0:len(data)]))
    return JsonResponse(data, safe=False)

def aboutView(request):
    template_name = 'vizzes/about.html'
    return render(request, template_name)

def IndexView(request):
    template_name = 'vizzes/index.html'
    return render(request, template_name)
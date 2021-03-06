from django.urls import path

from . import views

app_name = 'vizzes'
urlpatterns = [
    path('', views.IndexView, name='index'),
    path(r'datavizzes',views.VizListView.as_view(),name='VizList'),
    path(r'<int:pk>/', views.VizView.as_view(), name='viz'),
    path(r'<int:pk>/VizData', views.VizData, name='VizData'),
    path(r'about', views.aboutView, name='about')
    # path('ingest', views.IngestView, name='ingest'),
]
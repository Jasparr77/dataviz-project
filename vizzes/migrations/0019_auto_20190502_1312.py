# Generated by Django 2.2 on 2019-05-02 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vizzes', '0018_auto_20190502_1238'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dataviz',
            name='viz_file',
            field=models.CharField(default='Paste CDN URL or TBX embed code here', max_length=500),
        ),
    ]

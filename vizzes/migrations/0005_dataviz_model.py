# Generated by Django 2.1.4 on 2018-12-05 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vizzes', '0004_auto_20181205_2048'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataviz',
            name='model',
            field=models.CharField(choices=[('women_congress', 'women_congress')], default='', max_length=200),
            preserve_default=False,
        ),
    ]
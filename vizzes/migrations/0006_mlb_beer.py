# Generated by Django 2.1.4 on 2018-12-05 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vizzes', '0005_dataviz_model'),
    ]

    operations = [
        migrations.CreateModel(
            name='mlb_beer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('team', models.TextField()),
                ('nickname', models.TextField()),
                ('city', models.TextField()),
                ('price', models.FloatField(default='')),
                ('size', models.FloatField(default='')),
                ('price_per_ounce', models.FloatField(default='')),
            ],
        ),
    ]
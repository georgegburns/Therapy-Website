# Generated by Django 4.1.3 on 2022-11-18 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Prices',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Therapy', models.CharField(max_length=100, verbose_name='Therapy')),
                ('Type', models.CharField(choices=[('Online', 'Online'), ('In Person', 'In Person')], max_length=100, verbose_name='Type')),
                ('Price', models.DecimalField(decimal_places=2, max_digits=4, verbose_name='Price')),
            ],
            options={
                'verbose_name': 'Prices of Therapies',
            },
        ),
    ]

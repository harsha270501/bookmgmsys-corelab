# Generated by Django 3.0.8 on 2020-12-27 05:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookstore', '0005_auto_20201227_0459'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='reversed_by',
            new_name='reserved_by',
        ),
    ]

from django.db import models

# Create your models here.

class Artist(models.Model):
    name=models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Song(models.Model):
    title=models.CharField(max_length=100)
    artist=models.ForeignKey(Artist,related_name="songs",on_delete=models.CASCADE)

    def __str__(self):
        return self.title

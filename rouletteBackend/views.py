from django.shortcuts import render
from .models import Artist,Song
from rest_framework import viewsets
from .serializers import ArtistSerializers, SongSerializers

# Create your views here.

 
class ArtistViewSet(viewsets.ModelViewSet):
    queryset=Artist.objects.all()
    serializer_class=ArtistSerializers

class SongViewSet(viewsets.ModelViewSet):
    queryset=Song.objects.all()
    serializer_class=SongSerializers

    
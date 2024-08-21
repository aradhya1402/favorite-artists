from rest_framework import serializers
from .models import Artist,Song

class SongSerializers(serializers.ModelSerializer):
    class Meta:
        model=Song
        fields=['id','title','artist']

class ArtistSerializers(serializers.ModelSerializer):
    class Meta:
        model=Artist
        fields=['id','name']
from django.shortcuts import render
from rest_framework import generics
from .serializers import PetCategorySerializer, PetSerializer
from .models import PetCategory, Pet


class ListPetCategoryView(generics.ListCreateAPIView):
	queryset = PetCategory.objects.all()
	serializer_class = PetCategorySerializer

class DetailPetCategoryView(generics.RetrieveUpdateDestroyAPIView):
	queryset = PetCategory.objects.all()
	serializer_class = PetCategorySerializer


class ListPetView(generics.ListCreateAPIView):
	queryset = Pet.objects.all()
	serializer_class = PetSerializer

class DetailPetView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Pet.objects.all()
	serializer_class = PetSerializer
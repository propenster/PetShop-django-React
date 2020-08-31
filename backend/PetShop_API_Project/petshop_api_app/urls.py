from django.urls import path
from . import views


urlpatterns = [
		path('pets', views.ListPetView.as_view()),
		path('pets/<int:pk>', views.DetailPetView.as_view()),
		path('categories', views.ListPetCategoryView.as_view()),
		path('categories/<int:pk>', views.DetailPetCategoryView.as_view())
]
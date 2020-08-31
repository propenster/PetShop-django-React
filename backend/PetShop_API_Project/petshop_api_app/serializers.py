from rest_framework import serializers
from .models import PetCategory
from .models import Pet

class PetCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = PetCategory
		fields = ('category_name', 'category_pub_date')
		
class PetSerializer(serializers.ModelSerializer):
	pet_image = serializers.FileField(max_length=None, use_url=True)
	class Meta:
		model = Pet
		fields = ('id',
			'pet_name',
			'pet_category',
			'pet_location',
			'pet_image',
			'pet_owner_name',
			'pet_owner_email',
			'pet_owner_phone',
			'pet_registration_date',
			'pet_is_available')
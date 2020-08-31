from django.contrib import admin
from .models import PetCategory
from .models import Pet


admin.site.register(PetCategory)

@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
	list_display = ('pet_name', 'pet_category', 'pet_location', 'pet_image', 'pet_owner_name', 'pet_owner_email', 'pet_owner_phone', 
		'pet_registration_date', 'pet_is_available')
	list_filter = ('pet_category', 'pet_location', 'pet_registration_date', 'pet_is_available')
	search_fields = ('pet_category', 'pet_location', 'pet_registration_date')

	actions = ['make_pet_adoptible']


	def make_pet_adoptible(self, request, queryset):
		queryset.update(pet_is_available=True)
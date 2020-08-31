from django.db import models

# Create your models here.

class PetCategory(models.Model):
	category_name = models.CharField(max_length=50, null=True, blank=True, db_index=True)
	category_pub_date = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ['category_name']
		verbose_name_plural = 'Pet Categories'

	def __str__(self):
		return self.category_name

class Pet(models.Model):
	pet_name = models.CharField(max_length=100)
	pet_category = models.ForeignKey(PetCategory, on_delete=models.CASCADE)
	pet_location = models.CharField(max_length=250)
	pet_image = models.FileField(upload_to='uploads', blank=True)
	pet_owner_name = models.CharField(max_length=250, blank=True)
	pet_owner_email = models.CharField(max_length=50)
	pet_owner_phone = models.CharField(max_length=11)
	pet_registration_date = models.DateTimeField(auto_now_add=True)
	pet_is_available = models.BooleanField(default=False)

	class Meta:
		ordering = ['-pet_registration_date', 'pet_category']

	def __str__(self):
		return f'Added {self.pet_name} to {self.pet_category} category'

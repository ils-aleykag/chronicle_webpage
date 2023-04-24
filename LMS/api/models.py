from django.db import models

# Create your models here.
class Book(models.Model):
    bookname = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    isbn = models.CharField(max_length=13)
    price=models.IntegerField()
    status_of_book = models.CharField(max_length=30)
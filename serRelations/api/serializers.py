from .models import User, Book
from rest_framework import serializers

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id','bookname', 'author', 'isbn', 'price', 'status_of_book', 'user']

class UserSerializer(serializers.ModelSerializer):
    book = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'is_active', 'is_admin', 'book']
        # fields = ['id', 'name', 'gender', 'phoneNo','book']
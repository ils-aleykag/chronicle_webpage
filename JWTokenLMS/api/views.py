from .models import Book
from .serializers import BookSerializer
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


#################### MODEL VIEWSET #########################
class BookModelViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_fields = ['bookname', 'status_of_book', 'author']
    authetication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]



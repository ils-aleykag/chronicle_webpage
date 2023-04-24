from .models import Book
from .serializers import BookSerializer
from rest_framework import viewsets
# from rest_framework.filters import OrderingFilter


#################### MODEL VIEWSET #########################
class BookModelViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_fields = ['bookname', 'status_of_book', 'author']
    # filter_backends = [OrderingFilter]
    # ordering_fields = ['author'] 










################READ ONLY VIEW SET #######################
# class BookReadOnlyModelViewSet(viewsets.ReadOnlyModelViewSet):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer


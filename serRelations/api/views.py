from django.shortcuts import render
from .serializers import BookSerializer, UserSerializer
from rest_framework import viewsets
from .models import Book, User
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions
from .mypagination import MyPageNumberPagination
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status

class BookModelViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated, DjangoModelPermissions]
    pagination_class = MyPageNumberPagination

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated, DjangoModelPermissions]
    pagination_class = MyPageNumberPagination

class BookSearch(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_fields = ['bookname', 'status_of_book', 'author']
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated, DjangoModelPermissions]
    pagination_class = MyPageNumberPagination

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        print(page)
        if page is not None and len(page):
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        return Response(data={
            "error" : "Book Not Found."
        }, status=status.HTTP_404_NOT_FOUND)


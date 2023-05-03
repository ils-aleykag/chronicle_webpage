from .models import Book
from .serializers import BookSerializer
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly, DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle
from .mypagination import MyPageNumberPagination
from rest_framework.response import Response 
from django.http import Http404
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
# from rest_framework.filters import OrderingFilter

#################### MODEL VIEWSET #########################
class BookModelViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_fields = ['bookname', 'status_of_book', 'author']
    authetication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated, DjangoModelPermissions]
    # to restrict api access for authorized and register users
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    pagination_class = MyPageNumberPagination
    # permission_classes = [IsAuthenticated/AllowAny/IsAdminUser(staff true ones)/ IsAuthenticatedOrReadOnly/ DjangoModelPermissions(give add,change & delete permission to particular user)/ DjangoModelPermissionsOrAnonReadOnly]
    # filter_backends = [OrderingFilter]
    # ordering_fields = ['author'] 

    
class BookSearch(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_fields = ['bookname', 'status_of_book', 'author']
    authetication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated, DjangoModelPermissions]
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    pagination_class = MyPageNumberPagination
    # filter_backends = [CustomBookFilterBackend]

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


    # def list(self, request, *args, **kwargs):
    #     query_set = self.filter_queryset(self.get_queryset())
    #     if query_set.exists():
    #         serializer = self.get_serializer(query_set, many=True)
    #         return Response(serializer.data) 
    #     return Response(data={
    #         "error": "Book Not Found."
    #     }, status=status.HTTP_404_NOT_FOUND)

# class CustomBookFilterBackend(DjangoFilterBackend):
#     def filter_queryset(self, request, queryset, view):
#         query_set = super().filter_queryset(request, queryset, view)
#         return query_set













################READ ONLY VIEW SET #######################
# class BookReadOnlyModelViewSet(viewsets.ReadOnlyModelViewSet):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer


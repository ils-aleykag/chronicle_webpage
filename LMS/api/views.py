from .models import Book
from .serializers import BookSerializer
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly, DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly
# from rest_framework.filters import OrderingFilter


#################### MODEL VIEWSET #########################
class BookModelViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_fields = ['bookname', 'status_of_book', 'author']
    authetication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated, DjangoModelPermissions]
    # permission_classes = [IsAuthenticated/AllowAny/IsAdminUser(staff true ones)/ IsAuthenticatedOrReadOnly/ DjangoModelPermissions(give add,change & delete permission to particular user)/ DjangoModelPermissionsOrAnonReadOnly]
    # filter_backends = [OrderingFilter]
    # ordering_fields = ['author'] 










################READ ONLY VIEW SET #######################
# class BookReadOnlyModelViewSet(viewsets.ReadOnlyModelViewSet):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer


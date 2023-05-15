from django.contrib import admin
from django.urls import path,include
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('bookapi',views.BookModelViewSet,basename='book')
router.register('userapi',views.UserModelViewSet,basename='user')
# router.register('searchapi',views.BookSearch, basename='search')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('booksearch/', view=views.BookSearch.as_view())
]


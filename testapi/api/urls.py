from django.conf.urls import url

from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token
from rest_framework.routers import SimpleRouter

router = SimpleRouter()

urlpatterns = router.urls + [
    url(r'^jwt-auth/', obtain_jwt_token),
    url(r'^jwt-verify/', verify_jwt_token)
]

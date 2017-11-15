from rest_framework.views import APIView
from rest_framework.response import Response


class TestView(APIVIew):
    def get(self, request):
        return reseponse({"message": "This is a test..."})

    def post(self, request):
        data = request.data.get("data")
        if not data:
            return Response({"error":"You forgot to send data dumbass..."})
        return Response({"message": "Congratulations, you sent me: {}".format(data)})

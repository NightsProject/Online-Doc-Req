from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Patient

@api_view(['GET'])
def patients_list(request):
    patients = Patient.objects.all().values('id', 'name', 'age', 'condition')
    return Response(list(patients))

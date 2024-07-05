import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
cred = credentials.Certificate("serviceAccountKey1.json")
firebase_admin.initialize_app(cred,{
    # 'databaseURL':'https://facial-attendance-system-1a7af-default-rtdb.firebaseio.com/'
    'databaseURL':'https://facial-attendance-system-75cbe-default-rtdb.firebaseio.com/'
})

ref = db.reference('Students')

data = {
    "963952":{
    "id":963952,
    "name":"Saksham Tyagi",
    "major":"AIML",
    "starting_year":2020,
    "total_attendance":6,
    "year":4,
    "last_attendance_time":"2024-2-11 00:54:34"
    },
     "963852":{
    "id":963852,
    "name":"Elon Musk",
    "major":"AIML",
    "starting_year":2020,
    "total_attendance":6,
    "year":4,
    "last_attendance_time":"2024-2-11 00:54:34"
    },
     "852741":{
    "id":852741,
    "name":"Emily Blunt",
    "major":"AIML",
    "starting_year":2020,
    "total_attendance":6,
    "year":4,
    "last_attendance_time":"2024-2-11 00:54:34"
    },
     "852742":{
    "id":852742,
    "name":"Sahil jain",
    "major":"AIML",
    "starting_year":2020,
    "total_attendance":6,
    "year":4,
    "last_attendance_time":"2024-2-11 00:54:34"
    }
}

for key,value in data.items():
    ref.child(key).set(value)
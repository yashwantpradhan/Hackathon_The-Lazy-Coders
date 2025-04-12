from fastapi import FastAPI, Query
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Government Schemes API")

# Sample database of schemes
schemes_db = [
    {
        "name": "PM-Kisan",
        "state": "All",
        "gender": "Any",
        "age_range": [18, 60],
        "income_limit": 150000,
        "occupation": "Farmer"
    },
    {
        "name": "Kanya Sumangala Yojana",
        "state": "Uttar Pradesh",
        "gender": "Female",
        "age_range": [0, 21],
        "income_limit": 300000,
        "occupation": "Any"
    },
    {
        "name": "Mahatma Gandhi National Rural Employment Guarantee Act",
        "state": "Maharashtra",
        "gender": "Any",
        "age_range": [18, 60],
        "income_limit": 150000,
        "occupation": "Unemployed"
    }
]

class Scheme(BaseModel):
    name: str
    state: str
    gender: str
    age_range: List[int]
    income_limit: int
    occupation: str

@app.get("/schemes/")
def get_schemes(
    age: int,
    income: int,
    occupation: str,
    gender: str,
    state: str
):
    """
    Get government schemes based on age, income, occupation, gender, and state.
    :param age: Age of the person
    :param income: Monthly income of the person
    :param occupation: Occupation of the person
    :param gender: Gender of the person (Male/Female/Any)
    :param state: State of the person
    :return: List of government schemes based on the parameters
    """
    filtered = []
    for scheme in schemes_db:
        if (
            (scheme["state"] == state or scheme["state"] == "All") and
            (scheme["gender"].lower() == gender.lower() or scheme["gender"].lower() == "any") and
            (scheme["occupation"].lower() == occupation.lower() or scheme["occupation"].lower() == "any") and
            (scheme["age_range"][0] <= age <= scheme["age_range"][1]) and
            (income <= scheme["income_limit"])
        ):
            filtered.append(scheme)

    return filtered

# You can run the app using:
# uvicorn app.main:app --reload

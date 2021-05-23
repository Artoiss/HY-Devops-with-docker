FROM python:3

WORKDIR /usr/src/app

COPY . .

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

CMD ["containerization_test.py"]

ENTRYPOINT ["python3"]

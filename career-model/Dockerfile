FROM python:3.11

WORKDIR /career-model

COPY requirements.txt .

RUN pip install flask
RUN pip install --no-cache-dir -r requirements.txt

COPY . .


EXPOSE 8080

ENV PORT 8080
ENV HOSTNAME "0.0.0.0"
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "8080"]
# ICT-Architecture
## This is the Backend for the App

npm install
npm start

# **API**
UPLOAD:

GET https://hek46ulrnc.execute-api.us-east-1.amazonaws.com/prod/upload?file={FILE.EXTENSION}

response:

```{
 "URL": {
 "url": "https://ictarch-groep9-bucket.s3.amazonaws.com/",
 "fields": {
 "key": "25d58f56-b300-4fa5-adfd-3f5acab6d49c.png",
 "AWSAccessKeyId": "ASIA4ELVBLYWHKVBJJ4B",
 "x-amz-security-token": "IQoJb3JpZ2luX2VjEPr//////////wEaCXVzLWVhc3QtMSJHMEUCIEO+gQWEh/xx7adycO6IbX5fxBJ3M7jX29Ddc06aZ6L8AiEAz1EyEn08+4NRPiUJPNvrvkb1lVPBgZ8mZGAzZF7/imQqyQEIMxAAGgw4MzQwMDU5ODI3NjQiDOrBsJA0mm7ItI7ASSqmASouSCgBQaWdgIQeg+Dc8EKSIGPlJYCF0B9Ri9Ggf4X/jHxuYtTP0nju5QF5FPRohAYPEY3LnT2vR3CtnGH8rhVA4d13RfMGXut+4ub5Fyd22yfGM5UviFGA68TPd9S4M/RQeiLysZTjeGoEb4dX5aB3R1gZ62y/d0sjzWzHaUgnj/ggjsZDtnVmLT7PktTWitlIjjlxuP8Hpbpj8fnP/atwstQqh5Qwj4XJggY64AHOjfhJuABJwbDwotF8mQmeyt385sXSaP/6s6pHBhWyh7KjYTxbF9mn//FPEOqqs+fHiyTCRUW9Fb9x2FFGiYvmS9ZliClepNqMdntR+mO5na+bHPp778mjbJk+dwBw9/mdRPdWt0cXZKwA6WkFB3rb6LkXbn0dbzPh6jlyzSr5CQuuJ/mcar8RmROJqcL5JATIBW1SBmpLBqqsfnfQXlGW8X/X7ZYakePm0BUlg8fKDA+4TszArX0nsIw6qbtH6TUoFaKapw3tqJ2xaQSdqZEpubgRvA6dnmhfG9L0dW462Q==",
 "policy": "eyJleHBpcmF0aW9uIjogIjIwMjEtMDMtMTdUMTg6NTU6MjhaIiwgImNvbmRpdGlvbnMiOiBbeyJidWNrZXQiOiAiaWN0YXJjaC1ncm9lcDktYnVja2V0In0sIHsia2V5IjogIjI1ZDU4ZjU2LWIzMDAtNGZhNS1hZGZkLTNmNWFjYWI2ZDQ5Yy5wbmcifSwgeyJ4LWFtei1zZWN1cml0eS10b2tlbiI6ICJJUW9KYjNKcFoybHVYMlZqRVByLy8vLy8vLy8vL3dFYUNYVnpMV1ZoYzNRdE1TSkhNRVVDSUVPK2dRV0VoL3h4N2FkeWNPNkliWDVmeEJKM003algyOURkYzA2YVo2TDhBaUVBejFFeUVuMDgrNE5SUGlVSlBOdnJ2a2IxbFZQQmdaOG1aR0F6WkY3L2ltUXF5UUVJTXhBQUdndzRNelF3TURVNU9ESTNOalFpRE9yQnNKQTBtbTdJdEk3QVNTcW1BU291U0NnQlFhV2RnSVFlZytEYzhFS1NJR1BsSllDRjBCOVJpOUdnZjRYL2pIeHVZdFRQMG5qdTVRRjVGUFJvaEFZUEVZM0xuVDJ2UjNDdG5HSDhyaFZBNGQxM1JmTUdYdXQrNHViNUZ5ZDIyeWZHTTVVdmlGR0E2OFRQZDlTNE0vUlFlaUx5c1pUamVHb0ViNGRYNWFCM1IxZ1o2MnkvZDBzanpXekhhVWduai9nZ2pzWkR0blZtTFQ3UGt0VFdpdGxJampseHVQOEhwYnBqOGZuUC9hdHdzdFFxaDVRd2o0WEpnZ1k2NEFIT2pmaEp1QUJKd2JEd290RjhtUW1leXQzODVzWFNhUC82czZwSEJoV3loN0tqWVR4YkY5bW4vL0ZQRU9xcXMrZkhpeVRDUlVXOUZiOXgyRkZHaVl2bVM5WmxpQ2xlcE5xTWRudFIrbU81bmErYkhQcDc3OG1qYkprK2R3Qnc5L21kUlBkV3QwY1haS3dBNldrRkIzcmI2TGtYYm4wZGJ6UGg2amx5elNyNUNRdXVKL21jYXI4Um1ST0pxY0w1SkFUSUJXMVNCbXBMQnFxc2ZuZlFYbEdXOFgvWDdaWWFrZVBtMEJVbGc4ZktEQSs0VHN6QXJYMG5zSXc2cWJ0SDZUVW9GYUthcHczdHFKMnhhUVNkcVpFcHViZ1J2QTZkbm1oZkc5TDBkVzQ2MlE9PSJ9XX0=",
 "signature": "ZGaLD0pqj4egaenycazyv2QPC4Q="
 }
 }
}
```

POST: https://hek46ulrnc.execute-api.us-east-1.amazonaws.com/prod/upload
body:
key:
AWSAccessKeyId:
x-amz-security-token:
policy:
signature:
 
DOWNLOAD:

GET https://hek46ulrnc.execute-api.us-east-1.amazonaws.com/prod/download?file=jaja.png

response:
```
{
 "URL": "https://ictarch-groep9-bucket.s3.amazonaws.com/jaja.png?AWSAccessKeyId=ASIA4ELVBLYWDJBJYZ7T&Signature=oRjqrSqdgBYdxqBAJTd2TOQc5XI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCArIiaxLY8evJCyc8hi1xLKXvb68%2FSI%2FjWjWMEwcsWXAIgLVJJMF0cI7Uq2JARoPkubmxqwXicTanRyWz%2FGd%2FLZVkqxgEIMxAAGgw4MzQwMDU5ODI3NjQiDDx5y7s1XZWy%2FYFoKiqjAWtBIsoIqVsH1NsbC30LZTwfxTJxcSQOYYVSJWQfutVRG9Sdvuz%2FBQKj299ultk31XyQ%2FX8tz4gKyu0RSvGCoDTe7strIKAW05f2irU1c5qK1iSo7BX88tAJQtl3JQPXtj17YI5SHnuS%2FGj1GmY36eTmdT9nf6rdyUTwX%2FieVkFHNsOEnD4Kf2M08b8P%2BZS6CLu77ANqVo7tD%2F8IPpUidQYgL3IwzofJggY64AGLCEGHwS9NFC%2BbYyUz11ck5FQVkxRGESehGiCO%2BZrPzgHrnSQmaRw2qx6bqpwv2KAXqsPIX4%2B%2B6b9bdFPOiK%2Fd3SiV5AGrv118Fq%2FU2YWZuMRGg%2FAcQofqe11Z3cyr2Ch9S7LD22rQMpurLhVvLA7OhR4gJytJxY9Cpv0aRnHBEcCp83uK2ToNwxWiUIWXIfRREkTUSXfx7ORpcmScCNXYZWcFIwgKruXafq9a%2BgBaI0q2U5NW%2BJMxTau%2F2yeEEwyIZKO%2FVKQrD40gt2M1%2FySjVOMKeUf%2BWBUvVYOIOPUlFg%3D%3D&Expires=1616007648"
}
```
(Enter URL for download)
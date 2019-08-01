# wrapper-bug

A minimal recreation of the wrapper bug fixed in `@serverless/enterprise-plugin@1.3.4`.

```
$ sls invoke -f unwrapped
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v1.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
$ sls invoke -f wrapped
{
    "errorMessage": "2019-08-01T14:17:36.490Z 252d5fb4-533b-42d2-8706-47719f1e19ea Task timed out after 6.01 seconds"
}

  Error --------------------------------------------------

  Invoked function failed

     For debugging logs, run again after setting the "SLS_DEBUG=*" environment variable.

  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues
     Issues:        forum.serverless.com

  Your Environment Information ---------------------------
     Operating System:          darwin
     Node Version:              10.15.0
     Serverless Version:        1.49.0
     Enterprise Plugin Version: 1.3.5
     Platform SDK Version:      2.1.0
```

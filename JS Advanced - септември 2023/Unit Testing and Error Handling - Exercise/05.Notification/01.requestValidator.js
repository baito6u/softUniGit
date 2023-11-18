function requestValidator(obj) {
  const validMethod = ["GET", "POST", "DELETE", "CONNECT"];
  const uriPattern = /^[\w.]+$/g;
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const specialChar = [`<`, `>`, `\\`, `&`, `'`, `"`, `)`];

  if (!validMethod.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!obj.uri || (obj.uri !== "*" && !obj.uri.match(uriPattern))) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!validVersions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  for (const element of obj.message) {
    if (specialChar.includes(element)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  return obj;
}

console.log(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);

APEE Version 1.0.0

APEE is a proprietary product own by Mitra Innovation Pvt. Ltd.

This is an Angular JS Application that will be built as a Docker container to constitue a basic scaffolding Angular Front-End Project. Uses Node Js and Express JS to proxy http requests to service backend.

Build 

	npm install

Build Docker Image
	
	* This will build the docker image "nalindamitrai/apee-angular-starter" with tag latest.

		docker build -t nalindamitrai/apee-angular-starter-nodejs .

	* Push the image to the relevant respository using docker push.

		docker push nalindamitrai/apee-angular-starter-nodejs


Running the container

	docker run -t -e -e "SERVICE_PORT=9090" -p 8080:8080 --link apee-spring-starter:servicebase --name apee-angular-starter-nodejs  nalindamitrai/apee-angular-starter-nodejs

See in action
	
	http://<hostname>:8080
deploy:
	yarn build
	gcloud app deploy statis.app.yaml --version=$(version) --no-promote

export_dot_env:
	export $(grep -v '^#' .env | xargs)

api_gen_local:
	wget http://localhost:8080/openapi.json -O ./spec.json
	npx openapi-typescript-codegen --input ./spec.json --output ./api --indent 2 --useUnionTypes --name AppClient

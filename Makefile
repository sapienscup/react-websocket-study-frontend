deploy:
	yarn build
	gcloud app deploy statis.app.yaml --version=$(version) --no-promote

export_dot_env:
	export $(grep -v '^#' .env | xargs)

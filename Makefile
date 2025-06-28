ENV_FILE=.env

.DEFAULT_GOAL := help

.PHONY: help cp-env setup up down

help: ## Show this help message
	@echo ""
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

cp-env: ## Generate .env file with empty values
	@echo "Copying .env file..."
	@echo "DATABASE_URL=" > $(ENV_FILE)
	@echo "JWT_SECRET=" >> $(ENV_FILE)
	@echo "RESEND_API_KEY=" >> $(ENV_FILE)
	@echo "POSTGRES_USER=" >> $(ENV_FILE)
	@echo "POSTGRES_PASSWORD=" >> $(ENV_FILE)
	@echo "POSTGRES_DB=" >> $(ENV_FILE)
	@echo "File $(ENV_FILE) created"

setup: ## Install dependencies and generate Prisma client
	@echo "Installing dependencies..."
	docker compose run --rm web npm install
	docker compose run --rm web npx prisma generate

up: ## Start Docker containers
	docker compose up -d

down: ## Stop Docker containers
	docker compose down
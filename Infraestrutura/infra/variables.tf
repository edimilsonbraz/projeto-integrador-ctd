variable "my_region" {
 default = "sa-east-1"
}

variable "keypair_name" {
 description = "Informe o nome da sua chave cadastrada na AWS"
}

variable "instance_name" {
 description = "Informe o nome do seu servidor Backend"
}

variable "enable_public_ip" {
 default = true
}

/* variable "my_subnet_id" {
 default = "subnet-03a654efe97445249"
} */
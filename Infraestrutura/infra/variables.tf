variable "my_region" {
 default = "sa-east-1"
}

variable "my_subnet_id" {
 default = "subnet-01a6976025a14708c"
}

variable "keypair_name" {
 description = "Informe o nome da sua chave cadastrada na AWS"
}

variable "instance_name" {
 description = "Informe o nome da seu servidor Backend"
}

variable "enable_public_ip" {
 default = true
}
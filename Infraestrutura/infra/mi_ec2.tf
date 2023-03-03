terraform {
  required_version = ">= 0.12"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.56.0"
    }
  }
}

provider "aws" {
  region = var.my_region
}

resource "aws_vpc" "vpc_pi_grupo6" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
}

resource "aws_subnet" "public_subnet_pi_grupo6" {
  vpc_id     = aws_vpc.vpc_pi_grupo6.id
  cidr_block = "10.0.1.0/24"
}

resource "aws_subnet" "private_subnet_pi_grupo6" {
  vpc_id     = aws_vpc.vpc_pi_grupo6.id
  cidr_block = "10.0.2.0/24"
}




data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}

resource "aws_instance" "backend" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"


  /*   #recuperamos esse subnet_id da nossa VPC default na sa-east-1
  subnet_id = var.my_subnet_id */

  #passando a chave que vamos usar, é a mesma que nós subimos em keypair
  key_name = var.keypair_name

  /*   #solicitando o vinculo com um IP publico
  associate_public_ip_address = var.enable_public_ip */

  tags = {
    Name = "T06DH-PI-GRUPO6-${var.instance_name}"
  }
}
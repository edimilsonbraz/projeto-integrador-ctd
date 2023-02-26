provider "aws" {
 region = var.my_region
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
  #recuperamos esse subnet_id da nossa VPC default na sa-east-1
  subnet_id = var.my_subnet_id

  #passando a chave que vamos usar, é a mesma que nós subimos em keypair
  key_name = "${var.keypair_name}"
  #solicitando o vinculo com um IP publico
  associate_public_ip_address = var.enable_public_ip

  tags = {
    Name = "T06DH-PI-GRUPO6${var.instance_name}"
  }
}
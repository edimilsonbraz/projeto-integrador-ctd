output "ec2_ip_publico" {
    description = "IP Público do EC2 gerenciamento"
    value = aws_instance.backend.*.public_ip
}
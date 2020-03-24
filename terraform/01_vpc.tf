provider "aws" {
  region  = var.region
  profile = "messi"
}

resource "aws_vpc" "messi" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = "true"
  enable_dns_support   = "true"
  tags = {
    Name = "MessiTerraform"
  }
}

output "vpc_id" {
  value = aws_vpc.messi.id
}

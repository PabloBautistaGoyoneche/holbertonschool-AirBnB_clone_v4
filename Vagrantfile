Vagrant.configure("2") do |config|
  # Box y configuraciones
  config.vm.box = "ubuntu/bionic64"
  config.vm.network "forwarded_port", guest: 5001, host: 5001

  # Configuración del aprovisionamiento
  config.vm.provision "shell", inline: <<-SHELL
    # Comandos de aprovisionamiento (si es necesario)
  SHELL
end


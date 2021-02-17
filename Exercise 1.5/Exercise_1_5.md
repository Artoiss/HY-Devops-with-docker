docker run -it -d ubuntu sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'

docker container exec -it 8a21f2c8cf40 bash

root@8a21f2c8cf40:/# apt-get update

root@8a21f2c8cf40:/# apt-get install curl

root@8a21f2c8cf40:/# sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'

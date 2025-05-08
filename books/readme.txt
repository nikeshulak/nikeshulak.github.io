for those having time > use showCheckbox=false
i.e. http://localhost/nikeshulak.github.io/books/maha-geeta/file/03.html?showIndex=true&showCheckbox=false

for those which doesn't have time > use showCheckbox=true
i.e. http://localhost/nikeshulak.github.io/books/es-dhammo-sanantano/file/08.html?search=null&saveIndex=null&showIndex=true&showCheckbox=true


file:///storage/emulated/0/Download/apache/nikeshulak.github.io/books/
(Simple HTTP Server > Root folder)

http://localhost/nikeshulak.github.io/books/tools/generate-shell-script.php?type=html

wget https://oshoworld.com/kahe-kabir-diwana-01/

wget https://oshoworld.com/wp-content/uploads/2020/11/Hindi%20Audio/OSHO-Kahe_Kabir_Diwana_01.mp3

scp travabricks:/home/manisha/Projects/fawesomeapps/archive/mp3.zip .
unzip mp3.zip
mv mp3 kahe-kabir-diwana

## delete lines 1 to 408 from all files from terminal
sed -i '1,408d' *.html

sed -i '2,$d' *.html
	const hitungKeranjang = document.querySelector(".hitung_keranjang");
	const keranjangDOM = document.querySelector(".keranjang_");
	const totalItem= document.querySelector("#itung_total");
	const hargaTotal=document.querySelector(".harga_total");
	const masukkanKeranjang=document.querySelectorAll(".beli");


	let itemKeranjang=[];

		hitungKeranjang.addEventListener("click",() => {
				keranjangDOM.classList.toggle("active");
	}); //menyembunyikan item yang terdapat di dalam icon

		masukkanKeranjang.forEach(tombol =>{
		tombol.addEventListener("click",() =>{
			let parentElement=tombol.parentElement;
			const produk={
			id : parentElement.querySelector(".produk_id").value,
			nama : parentElement.querySelector(".nama_produk").innerText,
			gambar : parentElement.querySelector("#gambar").getAttribute("src"),
			harga : parentElement.querySelector(".harga_produk").innerText.
			replace("Rp"," "),
			kuantitas : 1,

		}
			let keranjang=itemKeranjang.filter(barang=>barang.id===produk.id).length>0;
			
				if(!keranjang){
				addItemToTheDOM(produk);
				}

				const cartDOMItems =document.querySelectorAll(".item_keranjang");
			cartDOMItems.forEach(setiapItem=>{
				if (setiapItem.querySelector("#produk_id").value===produk.id){
					tambahProduk(setiapItem,produk);
					kurangProduk(setiapItem,produk);
					hapusProduk(setiapItem,produk);
				}
			});

				itemKeranjang.push(produk);
				kalkulasiHarga();
			})
		})

		function addItemToTheDOM(produk){
			keranjangDOM.insertAdjacentHTML("afterbegin", `
    	<div class="item_keranjang">
							<input type="hidden" name="" id="produk_id" value="${produk.id}">
							<img src="${produk.gambar}" alt="" id="">
							<h4 class="nama_produk">${produk.nama}</h4>
							<a class="btn_small"  action="decrease">&minus;</a>
							<h4 class="kuantitas_produk">${produk.kuantitas}</h4>
							<a class="btn_small"  action="increase">&plus;</a>
							<span class="harga_produk">${produk.harga}</span>
							<a class="btn_small hapus_"  action="remove" >&times;</a>
						</div>`);
		} //Memasukkan Item ke dalam keranjang

		function kalkulasiHarga(){

		let total=0;
		itemKeranjang.forEach(item=>{
			total+=item.kuantitas*item.harga;
		});

		hargaTotal.innerText=total;
		totalItem.innerText=itemKeranjang.length;

		} //Menghitung Jumlah harga dari item yang dimasukkan

		function tambahProduk(setiapItem,produk){
		setiapItem.querySelector("[action='increase']").addEventListener("click",()=>{
			itemKeranjang.forEach(itemkeranjang=>{
				if (itemkeranjang.id===produk.id){
					setiapItem.querySelector(".kuantitas_produk").innerText= ++itemkeranjang.kuantitas;
				kalkulasiHarga();
				}
				
			})
		})
	} //Menambah item yang dimasukkan 

	function kurangProduk(setiapItem,produk){
		setiapItem.querySelector("[action='decrease']").addEventListener("click",()=>{
			itemKeranjang.forEach(itemkeranjang=>{
				if (itemkeranjang.id===produk.id){
					if (itemkeranjang.kuantitas>1) {
						setiapItem.querySelector(".kuantitas_produk").innerText= --itemkeranjang.kuantitas;
					}
					else{
						itemKeranjang=itemKeranjang.filter(elemenBaru=>
							elemenBaru.id!==produk.id);
						setiapItem.remove();
						
					}
					
					kalkulasiHarga();
				}
			})
		})
	} // Mengurangi item yang dimasukkan


	function hapusProduk(setiapItem,produk){
		setiapItem.querySelector("[action='remove']").addEventListener("click",()=>{
			itemKeranjang.forEach(itemkeranjang=>{
				if(itemkeranjang.id===produk.id){
					itemKeranjang=itemKeranjang.filter(elemenBaru=>elemenBaru.id !== produk.id);

					setiapItem.remove();
					localStorage.setItem("keranjang_",JSON.stringify(itemKeranjang));
  	
					kalkulasiHarga();
				}
			})
		})
	} //Menghapus item produk


	function next(){
		document.location.href="formPendaftaran.html"
	}



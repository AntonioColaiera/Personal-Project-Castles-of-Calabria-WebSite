package CastelliCalabria;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CastelliCalabriaModel {


	

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id; 
		
		@Column
		private String nome;
		@Column
		private String image_url;
		@Column 
		private String posizione;
		@Column
		private String info; 
		@Column
		private String condizioni;
		@Column
		private String difficoltàPercorso;
		
		
		public CastelliCalabriaModel() {}
		
		
		

		public CastelliCalabriaModel(Long id, String nome, String image_url, String posizione, String info,
				String condizioni, String difficoltàPercorso) {
			super();
			this.id = id;
			this.nome = nome;
			this.image_url = image_url;
			this.posizione = posizione;
			this.info = info;
			this.condizioni = condizioni;
			this.difficoltàPercorso = difficoltàPercorso;
		}




		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}
		
		

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getImage_url() {
			return image_url;
		}

		public void setImage_url(String image_url) {
			this.image_url = image_url;
		}

		public String getPosizione() {
			return posizione;
		}

		public void setPosizione(String posizione) {
			this.posizione = posizione;
		}

		public String getInfo() {
			return info;
		}

		public void setInfo(String info) {
			this.info = info;
		}

		public String getCondizioni() {
			return condizioni;
		}

		public void setCondizioni(String condizioni) {
			this.condizioni = condizioni;
		}

		public String getDifficoltàPercorso() {
			return difficoltàPercorso;
		}

		public void setDifficoltàPercorso(String difficoltàPercorso) {
			this.difficoltàPercorso = difficoltàPercorso;
		}
		
		

		
		
		
		
	
}

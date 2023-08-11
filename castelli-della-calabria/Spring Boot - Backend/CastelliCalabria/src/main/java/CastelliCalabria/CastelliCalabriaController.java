package CastelliCalabria;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/castellicalabria")
public class CastelliCalabriaController {

	
	@Autowired
	private CastelliCalabriaRepository castelliCalabriaRepository; 

    
   @GetMapping("/castelli")
    public List<CastelliCalabriaModel> getAllPlaces() {
    	return castelliCalabriaRepository.findAll(); 
    	}
    	
    	@GetMapping("/castelli/{id}")
    	public CastelliCalabriaModel getBookById(@PathVariable Long id) {
            return castelliCalabriaRepository.findById(id)
            		.orElseThrow(() -> new RuntimeException( id + "this id didn't find"));
            }
    
    
    @PostMapping("/save")
    public String saveCastelli(@RequestBody CastelliCalabriaModel castelliCalabriaModel) {
		 castelliCalabriaRepository.save(castelliCalabriaModel);
		 return "Saved"; 
		}
    
    @PutMapping("/updatecastelli/{id}")
    public String updateCastello(
    		@PathVariable Long id,
    		@RequestBody CastelliCalabriaModel castelliCalabriaModel) {
    	
    	CastelliCalabriaModel updateCastello = castelliCalabriaRepository.findById(id).get(); 
    	updateCastello.setNome(castelliCalabriaModel.getNome()); 
    	updateCastello.setImage_url(castelliCalabriaModel.getImage_url()); 
    	updateCastello.setPosizione(castelliCalabriaModel.getPosizione()); 
    	updateCastello.setInfo(castelliCalabriaModel.getInfo()); 
    	updateCastello.setCondizioni(castelliCalabriaModel.getCondizioni()); 
    	updateCastello.setDifficoltàPercorso(castelliCalabriaModel.getDifficoltàPercorso()); 
    	castelliCalabriaRepository.save(updateCastello); 
    	return "Updated"; 
    }
    
    @DeleteMapping("/delete/{id}")
    public String deletePlace(@PathVariable Long id) {
    	
    	CastelliCalabriaModel deletePlace = castelliCalabriaRepository.findById(id).get();
    	castelliCalabriaRepository.delete(deletePlace);
    	return "Delete id:" + id; 
    }
    
    }

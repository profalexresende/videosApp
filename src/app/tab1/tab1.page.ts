import { GeneroService } from './../services/genero.service';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IFilmeApi, IListaFilmes } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers'
    },
    {
      nome: 'De Volta para o Futuro (1985)',
      lancamento: '25/12/1985 (BR)',
      duracao: '1h56m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i996T0lI1fGtFEowiH3V6eZthL0.jpg',
      generos: ['Aventura', 'Comédia', 'Ficção científica', 'Família'],
      pagina: '/de-volta-futuro'
    },
    {
      nome: 'Shrek (2001)',
      lancamento: '22/06/2001',
      duracao: '1h30m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
      generos: ['Animação', 'Comédia', 'Fantasia', 'Aventura'],
      pagina: ''
    },
    {
      nome: 'Ghost: Do Outro Lado da Vida (1990)',
      lancamento: '01/11/1990',
      duracao: '2h09m',
      classificacao: 72,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4xENTjpUhi6yQrcpvejVZuN39M2.jpg',
      generos: ['Fantasia', 'Drama', 'Thriller', 'Mistério', 'Romance'],
      pagina: ''
    }
  ];

  listaFilmes: IListaFilmes;
  generos: string[] = [];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({

      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit() {
    this.generoService.buscarGenero().subscribe(dados => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });

  }

}

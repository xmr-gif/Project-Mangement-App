import { Component } from '@angular/core';

@Component({
  selector: 'app-discussion-page-header',
  standalone: true, // composant autonome
  templateUrl: './discussion-page-header.html',
  styleUrls: ['./discussion-page-header.css'],
})
export class DiscussionPageHeader {
  
  // Label du bouton Recent/Oldest
  sortLabel = "Recent";

  // Méthode pour basculer le label
  toggleSort() {
    this.sortLabel = this.sortLabel === "Recent" ? "Oldest" : "Recent";
  }
}

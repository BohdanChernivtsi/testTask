import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() imageSrc: string
  @Input() title: string
  @Input() description: string

}

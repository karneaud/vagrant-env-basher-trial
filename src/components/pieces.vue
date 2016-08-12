<div class="slider">
    <div v-for="(index, item) in pieces">
      <partial :name="pieceId" :item="item"></partial>
    </div>
  </div>

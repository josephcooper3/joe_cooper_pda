require('minitest/autorun')
require('minitest/rg')
require_relative('../models/card_game')
require_relative('../models/card')

class CardGameTest < MiniTest::Test

  def test_checkForAce
    cardGame = CardGame.new()
    card = Card.new('ace', 1)
    assert_equal(true, cardGame.checkForAce(card))
  end

end
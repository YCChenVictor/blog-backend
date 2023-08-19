class Woodcutter
  def initialize(in_right_place = true, init_num_of_woods = 0)
    @woods = init_num_of_woods
  end

  def cut
    @woods += 1
  end

  def woods
    @woods
  end
end
